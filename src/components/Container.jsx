import Image from "next/image"


export default function Container({name, image, subinfo}) {
    return (
        <div className="
        flex flex-col items-center justify-between
        bg-white shadow-2xl min-w-[200px] min-h-[200px]
        w-16 h-16
        rounded-xl
        space-y-3
        py-2
        ">
            <Image src={'/'} width={80} height={80} className="rounded-full bg-green-300" />
            <p>{name}</p>
            <p>{subinfo}</p>
        </div>
    )
}