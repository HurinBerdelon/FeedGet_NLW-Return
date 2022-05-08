import { Popover } from '@headlessui/react'
import { X } from 'phosphor-react'

export function CloseButton(): JSX.Element {

    return (
        <Popover.Button className='top-5 right-5 absolute text-zinc-500 dark:text-zinc-400 hover:dark:text-zinc-100 hover:text-zinc-800' title='Fechar formulário de feedback'>
            <X weight='bold' className='w-4 h-4' />
        </Popover.Button>
    )
}