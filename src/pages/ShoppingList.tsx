import { useState, useEffect } from "react"
import { Layout } from "../components/Layout"
import { api } from "../services/api"

type Item = {
  _id: string
  name: { value: string; checked: boolean }
  quantity: { value: number; checked: boolean }
  price: { value: number; checked: boolean }
  purchased: boolean
}

export function ShoppingList() {
  const [items, setItems] = useState<Item[]>([])
  const [nameInput, setNameInput] = useState("")
  const [quantityInput, setQuantityInput] = useState("")
  const [priceInput, setPriceInput] = useState("")
  const [loading, setLoading] = useState(true)

  // 1. Carregar itens do banco (VM2 via VM1)
  async function loadItems() {
    try {
      setLoading(true)
      const response = await api.get("/items")
      setItems(response.data)
    } catch (err) {
      console.error("Erro ao carrergar itens:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { loadItems() }, [])

  // 2. Adicionar Item Real
  async function addItem() {
    if (!nameInput.trim()) return

    const newItem = {
      name: { value: nameInput, checked: true },
      quantity: { value: Number(quantityInput) || 1, checked: true },
      price: { value: Number(priceInput.replace(",", ".")) || 0, checked: true },
      purchased: false
    }

    try {
      const response = await api.post("/items", newItem)
      setItems([...items, response.data])
      setNameInput(""); setQuantityInput(""); setPriceInput("")
    } catch (err) {
      alert("Erro ao salvar item no banco.")
    }
  }

  // 3. Alternar "Comprado" no Banco
  async function toggleBought(id: string, currentStatus: boolean) {
    try {
      await api.put(`/items/${id}`, { purchased: !currentStatus })
      setItems(items.map(item => 
        item._id === id ? { ...item, purchased: !currentStatus } : item
      ))
    } catch (err) {
      alert("Erro ao atualizar status.")
    }
  }

  // 4. Remover do Banco
  async function removeItem(id: string) {
    try {
      await api.delete(`/items/${id}`)
      setItems(items.filter(item => item._id !== id))
    } catch (err) {
      alert("Erro ao excluir.")
    }
  }

  const formatMoney = (v: number) => v.toLocaleString("pt-BR", { minimumFractionDigits: 2 })

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Lista de Compras Real 🛒</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          {/* FORMULÁRIO */}
          <div className="grid grid-cols-4 gap-2 mb-6">
            <input value={nameInput} onChange={e => setNameInput(e.target.value)} placeholder="Item" className="px-4 py-2 rounded-lg bg-slate-800" />
            <input type="number" value={quantityInput} onChange={e => setQuantityInput(e.target.value)} placeholder="Qtd" className="px-4 py-2 rounded-lg bg-slate-800" />
            <input type="text" value={priceInput} onChange={e => setPriceInput(e.target.value)} placeholder="Preço" className="px-4 py-2 rounded-lg bg-slate-800" />
            <button onClick={addItem} className="bg-indigo-600 rounded-lg hover:bg-indigo-500">Adicionar</button>
          </div>

          {loading ? <p>Carregando itens da VM2...</p> : (
            <ul className="space-y-2">
              {items.map(item => (
                <li key={item._id} className="grid grid-cols-[24px_1fr_1fr_1fr_24px] items-center bg-slate-800 px-4 py-3 rounded-lg gap-2">
                  <input type="checkbox" checked={item.purchased} onChange={() => toggleBought(item._id, item.purchased)} />
                  <span className={item.purchased ? "line-through opacity-50" : ""}>{item.name.value}</span>
                  <span>{item.quantity.value}x</span>
                  <span>R$ {formatMoney(item.price.value)}</span>
                  <button onClick={() => removeItem(item._id)} className="text-red-400">✕</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Layout>
  )
}
