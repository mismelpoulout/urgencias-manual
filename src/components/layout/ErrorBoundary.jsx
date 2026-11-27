import { Component } from 'react'

// Si algo falla al dibujar, muestra un aviso en lugar de dejar la pantalla en blanco.
export default class ErrorBoundary extends Component {
  state = { failed: false }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  render() {
    if (!this.state.failed) return this.props.children
    return (
      <div role="alert" className="mx-auto max-w-[520px] px-4 py-16 text-center">
        <h1 className="mb-3 font-serif text-[28px] font-bold">No se pudo mostrar el manual</h1>
        <p className="mb-5 text-ink2">Recarga la página. Si el problema continúa, usa tu protocolo local.</p>
        <button
          type="button"
          className="h-11 rounded-xl border-[1.5px] border-line bg-bg px-4 font-medium text-ink"
          onClick={() => window.location.reload()}
        >
          Recargar
        </button>
      </div>
    )
  }
}
