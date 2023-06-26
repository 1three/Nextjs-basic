'use client' // client component

import { useState } from "react"

export default function List() {
    let 상품 = ['tomato', 'pasta', 'coconut'] //[array]
    let [수량, 수량변경] = useState(0)
    // state 변경 시
    // 1. 자동 재렌더링
    // 2. state 변경함수() 사용 필수
    return (
      <div>
        <h3 className="title">Food List</h3>
        {
          상품.map((name, i) => {
            return (
              <div className="food" key={i}>
                <img src={`/food${i}.png`} className="food-img" ></img>
                <h4>{ name } 100,000</h4>
                <span> { 수량 } </span> {/* span: 줄바꿈 없는 div 태그 */}
                <button onClick={() => { 
                  수량변경(수량+1)
                }}>
                +
                </button>
              </div>
            )
          })
        }
        <p className="title-sub">by three kim</p>
      </div>
    )
}
