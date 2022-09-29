import tw from 'tailwind-styled-components'

export const Container = tw.div`z-50`

export const MenuButtonContainer = tw.div`flex group`

export const MenuButton = tw.button`
  flex
  opacity-90 group-hover:opacity-100
`

export const MenuItems = tw.div`
  max-h-[85vh]
  flex flex-col gap-2
  overflow-y-auto snap snap-y snap-mandatory scroll-pt-2 scrollbar-hide
  absolute left-4 right-4 md:left-auto md:right-0
  mt-2 p-2 origin-top-right
  rounded-2xl
  bg-white/50 backdrop-blur-md
  shadow-2xl
  focus:outline-none
`

export const MenuItemContainer = tw.div`snap-start md:w-52`

interface ItemButtonProps {
  active: boolean
  currentBackground: string
  expectedBackground: string
}
export const ItemButton = tw.button<ItemButtonProps>`
  ${p =>
    p.currentBackground !== p.expectedBackground &&
    !p.active &&
    'border-transparent text-white/80'}
  ${p =>
    p.currentBackground === p.expectedBackground &&
    !p.active &&
    'border-white text-white'}
  ${p => p.active && 'brightness-95 border-white/80 text-white/80'}
  border-2 rounded-2xl 
  cursor-pointer
  font-bold text-xl
  p-10 md:p-6
  w-full
  bg-center bg-cover
`
