import './Picker.css'

export default function Picker({ title, imagesData, type, setPicked, picked }) {
  return (
    <div>
      <label className='pikertile'>{title}</label>

      <div className="all-images-container">
        {imagesData.map((item) => (
          <div
            onClick={() => setPicked(item)}
            key={item + new Date()}
            className={`picker-image-container ${
              item === picked ? 'selected' : ''
            }`}
          >
            <img classname='pikerimg' src={`/images/${type}/${item}.jpg`} alt={item} />
          </div>
        ))}
      </div>
    </div>
  )
}
