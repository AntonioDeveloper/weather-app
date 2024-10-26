import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'nublado': "url('/img/nublado.jpg')",
        'ensolarado': "url('/img/ensolarado.jpg')",
        'dia-chuvoso': "url('/img/chuvoso.jpg')",
        'chuva-fraca': "url('/img/chuva-fraca.jpg')",
        'raios': "url('/img/raios.jpg')",
        'poucas-nuvens': "url('/img/poucas-nuvens.jpg')",
        'algumas-nuvens': "url('/img/algumas-nuvens.jpg')",
        'noite-limpa': "url('/img/noite-limpa.jpg')",
        'noite-nublada': "url('/img/noite-nublada.jpg')",
        'noite-chuvosa': "url('/img/noite-chuvosa.jpg')",
      },
    },
  },
  plugins: [],
}
export default config
