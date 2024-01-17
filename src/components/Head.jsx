import Image from 'next/image'
export function Head(){
    return(
        <>
        <header className='max-w bg-sky-200 flex items-center px-4 justify-between'>
        <Image
        src="/app_logo.svg"
        alt="Cocktail logo"
        className="dark:invert h-30 w-30"
        width={100}
        height={100}
        priority={true}
        />
        <h1 className='text-4xl font-bold text-neutral-700'>タスク管理アプリ</h1>
        </header>
        </>
    )
}