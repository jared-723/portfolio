import { logosKnowledge } from "../sources/logos"

const Knowledge = () => {
  return (
    <section className="grid px-4 gap-2 w-full text-center">
    <h3>Knowledge</h3>
    <section className="grid grid-cols-3">
      {
        logosKnowledge.map((logo) => <div className="grid place-content-center place-items-center gap-2 p-4" key ={logo.icon}>
          <h3>{logo.name}</h3>
          <div className="w-[40px] h-[40px]">
            <img className="w-full h-full object-contain" src={logo.icon} alt="" />
          </div>
        </div>)
      }
    </section>
  </section>
  )
}
export default Knowledge