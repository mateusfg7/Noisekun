import { Fragment, ReactNode } from 'react'
import { Transition } from '@headlessui/react'

type Props = {
  children: ReactNode
}
export const ModalTransitionFragment = ({ children }: Props) => (
  <Transition.Child
    as={Fragment}
    enter="ease-out duration-300"
    enterFrom="opacity-0 scale-95"
    enterTo="opacity-100 scale-100"
    leave="ease-in duration-200"
    leaveFrom="opacity-100 scale-100"
    leaveTo="opacity-0 scale-95"
  >
    {children}
  </Transition.Child>
)
