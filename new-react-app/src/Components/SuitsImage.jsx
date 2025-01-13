import React from 'react'

function SuitsImage( {suit1, suit1Alt, suit2, suit2Alt, suit3, suit3Alt,
    suit4, suit4Alt, suit5, suit5Alt, suit6, suit6Alt
  }) {
  return (
    <div className="flex flex-col items-center h-auto">
      <h4 className="text-lg font-semibold">POPULAR CHOICES ON CUSTOM SUITS</h4>
      <div className="suit-images flex justify-center gap-2 items-center flex-wrap container mt-4">
        <img src={suit1} alt={suit1Alt} className=" w-40 h-40 object-cover" />
        <img src={suit2} alt={suit2Alt} className=" w-40 h-40 object-cover" />
        <img src={suit3} alt={suit3Alt} className=" w-40 h-40 object-cover" />
      </div>
      <div className="suit-images flex justify-center gap-2 items-center flex-wrap mt-4">
        <img src={suit4} alt={suit4Alt} className=" w-40 h-40 object-cover" />
        <img src={suit5} alt={suit5Alt} className=" w-40 h-40 object-cover" />
        <img src={suit6} alt={suit6Alt} className=" w-40 h-40 object-cover" />
      </div>
    </div>
  )
}

export default SuitsImage
