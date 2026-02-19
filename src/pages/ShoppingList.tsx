import { useState } from "react"
import { Layout } from "../components/Layout"

type Item = {
  id: number
  name: string
  quantity: number
  price: number
  bought: boolean
}

export function ShoppingList() {
  const [items, setItems] = useState<Item[]>([])
  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState("")
  const [priceInput, setPriceInput] = useState("")

  function formatMoney(value: number) {
    return value.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  }

  function handlePriceChange(value: string) {
    const digits = value.replace(/\D/g, "")
    if (!digits) return setPriceInput("")

    const numberValue = Number(digits) / 100
    setPriceInput(formatMoney(numberValue))
  }

  function parseMoney(value: string) {
    return Number(value.replace(/\./g, "").replace(",", "."))
  }

  function addItem() {
    if (!name.trim()) return

    const parsedQuantity = Number(quantity)
    const parsedPrice = parseMoney(priceInput || "0")

    const item: Item = {
      id: Date.now(),
      name,
      quantity: parsedQuantity || 1,
      price: parsedPrice || 0,
      bought: false,
    }

    setItems([...items, item])

    setName("")
    setQuantity("")
    setPriceInput("")
  }

  function removeItem(id: number) {
    setItems(items.filter(item => item.id !== id))
  }

  function toggleBought(id: number) {
    setItems(
      items.map(item =>
        item.id === id ? { ...item, bought: !item.bought } : item
      )
    )
  }

  const totalPendentes = items.reduce(
    (sum, item) => item.bought ? sum : sum + item.price * item.quantity,
    0
  )

  const totalComprados = items.reduce(
    (sum, item) => item.bought ? sum + item.price * item.quantity : sum,
    0
  )

  const pendingItems = items.filter(item => !item.bought)
  const boughtItems = items.filter(item => item.bought)

  function renderPendingItem(item: Item) {
    const itemTotal = item.quantity * item.price

    return (
      <li
        key={item.id}
        className="grid grid-cols-[24px_1fr_1fr_1fr_1fr_24px]
                   items-center bg-slate-800 px-4 py-3 rounded-lg gap-2"
      >
        {/* CHECKBOX FIXO */}
        <div className="flex justify-center">
          <input
            type="checkbox"
            checked={item.bought}
            onChange={() => toggleBought(item.id)}
          />
        </div>

        {/* ITEM FLEX */}
        <span className="truncate">
          {item.name}
        </span>

        {/* QTD FLEX */}
        <span>
          {item.quantity}
        </span>

        {/* PREÇO FLEX */}
        <span className="whitespace-nowrap">
          R$ {formatMoney(item.price)}
        </span>

        {/* TOTAL FLEX */}
        <span className="font-semibold whitespace-nowrap">
          R$ {formatMoney(itemTotal)}
        </span>

        {/* REMOVER FIXO */}
        <div className="flex justify-end">
          <button
            onClick={() => removeItem(item.id)}
            className="text-red-400 hover:text-red-300"
          >
            ✕
          </button>
        </div>
      </li>
    )
  }

  function renderBoughtItem(item: Item) {
    const itemTotal = item.quantity * item.price

    return (
      <li
        key={item.id}
        className="grid grid-cols-[24px_1fr_1fr_1fr_24px]
                   items-center bg-slate-800 px-4 py-3 rounded-lg gap-2 opacity-60"
      >
        {/* CHECKBOX FIXO */}
        <div className="flex justify-center">
          <input
            type="checkbox"
            checked={item.bought}
            onChange={() => toggleBought(item.id)}
          />
        </div>

        {/* ITEM + TOOLTIP */}
        <div className="relative group">
          <span className="line-through cursor-pointer truncate">
            {item.name}
          </span>

          <div className="hidden lg:block absolute left-0 mt-2 w-40 bg-slate-900 text-sm rounded-lg p-2
                          opacity-0 group-hover:opacity-100 transition pointer-events-none shadow-lg z-10">
            <p>Total: R$ {formatMoney(itemTotal)}</p>
          </div>
        </div>

        {/* QTD */}
        <span className="line-through">
          {item.quantity}
        </span>

        {/* PREÇO */}
        <span className="line-through whitespace-nowrap">
          R$ {formatMoney(item.price)}
        </span>

        {/* REMOVER FIXO */}
        <div className="flex justify-end">
          <button
            onClick={() => removeItem(item.id)}
            className="text-red-400 hover:text-red-300"
          >
            ✕
          </button>
        </div>
      </li>
    )
  }

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">
        Lista de Compras 🛒
      </h1>

      <div className="flex flex-col lg:flex-row gap-6">

        <div className="flex-1">

          {/* FORM */}
          <div className="grid grid-cols-4 gap-2 mb-6">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Item"
              className="px-4 py-2 rounded-lg bg-slate-800"
            />

            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Qtd"
              className="px-4 py-2 rounded-lg bg-slate-800"
            />

            <input
              type="text"
              value={priceInput}
              onChange={(e) => handlePriceChange(e.target.value)}
              placeholder="Preço"
              className="px-4 py-2 rounded-lg bg-slate-800"
            />

            <button
              onClick={addItem}
              className="bg-indigo-600 rounded-lg hover:bg-indigo-500"
            >
              Adicionar
            </button>
          </div>

          {/* HEADER */}
          <div className="grid grid-cols-[24px_1fr_1fr_1fr_1fr_24px]
                          text-slate-400 mb-2 px-4 gap-2">
            <span className="text-center">✔</span>
            <span>Item</span>
            <span>Qtd</span>
            <span>Preço</span>
            <span>Total</span>
            <span></span>
          </div>

          <h2 className="text-xl font-semibold mt-4 mb-2">
            🛒 Pendentes
          </h2>

          <ul className="space-y-2">
            {pendingItems.map(renderPendingItem)}
          </ul>

          {pendingItems.length === 0 && (
            <p className="text-slate-500 mt-2">
              Nenhum item pendente
            </p>
          )}
        </div>

        {/* PAINEL */}
        <div className="lg:w-80 flex flex-col gap-4">

          <div className="bg-slate-800 rounded-xl p-6 sticky top-4">
            <p className="text-slate-400">Total pendente:</p>
            <p className="text-3xl font-bold text-green-400 mb-4">
              R$ {formatMoney(totalPendentes)}
            </p>

            <p className="text-slate-400">Total comprados:</p>
            <p className="text-xl font-semibold text-indigo-400">
              R$ {formatMoney(totalComprados)}
            </p>
          </div>

          {/* COMPRADOS */}
          <div className="bg-slate-800 rounded-xl p-4">
            <h2 className="text-lg font-semibold mb-3">
              ✅ Comprados
            </h2>

            <div className="grid grid-cols-[24px_1fr_1fr_1fr_24px]
                            text-slate-400 mb-2 text-sm px-4 gap-2">
              <span className="text-center">✔</span>
              <span>Item</span>
              <span>Qtd</span>
              <span>Preço</span>
              <span></span>
            </div>

            <ul className="space-y-2">
              {boughtItems.map(renderBoughtItem)}
            </ul>

            {boughtItems.length === 0 && (
              <p className="text-slate-500 text-sm">
                Nenhum item comprado
              </p>
            )}
          </div>

        </div>
      </div>
    </Layout>
  )
}
