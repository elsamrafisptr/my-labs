interface RibbonProps {
  text: string
}

export default function Ribbon({ text }: RibbonProps) {
  return (
    <div id="ribbon-container" className="before:bg-amber-500 after:bg-amber-500">
      <div className="flex items-center justify-center bg-amber-400 text-[11px] font-medium text-black">
        <span className="font-roboto-condensed -ml-4">{text}</span>

        <div className="animate-right-infinite absolute mx-4 h-6 w-2 bg-white opacity-30 shadow-sm shadow-white" />
      </div>
    </div>
  )
}
