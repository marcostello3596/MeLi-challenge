import { MdOutlineSearch } from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/image';
import "../globals.css";

const Header = () => {
    return (
        <header className='bg-primary flex'>
            <div className='mx-auto px-4 py-2 sm:max-w-full sm:py-2 md:max-w-full md:px-4 lg:max-w-[1248px] lg:px-6'>
                <div className='relative flex flex-col'>
                    <div className='relative flex items-center justify-between'>
                        <div className='flex w-full items-center gap-2 md:gap-7 lg:gap-14'>
                            <Link href='/' aria-label='Mercado Libre' title='Mercado Libre'>
                                <Image
                                src='/mercadolibre.com.svg'
                                alt='Mercado Libre Logo'
                                width={50}
                                height={36}
                                />
                            </Link>
                            <div className='flex h-14 w-full items-center justify-center sm:w-[520px] md:w-[600px] '>
                                <form
                                className='flex h-10 w-full flex-row rounded-sm bg-white shadow-md'
                                action='/items'
                                >
                                <input
                                    className='mx-4 h-full w-full border-none text-base font-normal leading-normal outline-none bg-white'
                                    type='text'
                                    name='search'
                                    placeholder='Nunca dejes de buscar'
                                />
                                <div className='flex flex-row items-center '>
                                    <div className='h-6 w-0 border-r border-[#e0e0e0]'></div>
                                    <button
                                    className='flex h-10 w-10 items-center justify-center text-xl text-gray-500'
                                    type='submit'
                                    >
                                    <MdOutlineSearch />
                                    </button>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
export { Header };
