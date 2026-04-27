export function useWhatsApp() {
  const numero = import.meta.env.VITE_WHATSAPP_NUMBER || '';

  function gerarLink(mensagem?: string): string {
    const base = `https://wa.me/${numero.replace(/\D/g, '')}`;
    if (!mensagem) return base;
    return `${base}?text=${encodeURIComponent(mensagem)}`;
  }

  function abrir(mensagem?: string): void {
    window.open(gerarLink(mensagem), '_blank', 'noopener,noreferrer');
  }

  return { numero, gerarLink, abrir };
}
