import { Poppins, Montserrat } from 'next/font/google';

const text = Poppins({ subsets: ['latin'], weight: "400" })
const heading = Montserrat({ subsets: ['latin'], weight: "600" })

export { text, heading };