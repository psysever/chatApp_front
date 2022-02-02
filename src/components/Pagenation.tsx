import React, { useState, useEffect } from 'react'

import '../assets/css/common.css'

export default function Pagenaition({
  maxNum,
  nowNum,
  setSortPageList,
  sortPageList,
}: any) {
  const [pageNum, setPageNum] = useState<any>([])

  const pagenationFnc = () => {
    if (maxNum === 0) {
      setPageNum([1])
    } else if (maxNum !== 1) {
      const page = []
      for (var i = 0; i < maxNum / 3; i++) {
        page.push(i + 1)
      }
      setPageNum(page)
    }
  }

  useEffect(() => {
    pagenationFnc()
  }, [maxNum])

  return (
    <div className="pagination_wrap">
      <span
        className="prev_btn btn"
        onClick={() => {
          if (nowNum > 1) {
            setSortPageList({ ...sortPageList, nowPage: nowNum })
          }
        }}
      >
        이전
      </span>
      {pageNum.map((data: any, i: any) => {
        return (
          <div
            className={nowNum === data ? 'page now_page' : 'page'}
            key={i}
            onClick={() => {
              setSortPageList({ ...sortPageList, nowPage: data })
            }}
          >
            {data}
          </div>
        )
      })}
      <span
        className="next_btn btn"
        onClick={() => {
          if (nowNum < pageNum.length) {
            setSortPageList({ ...sortPageList, nowPage: nowNum })
          }
        }}
      >
        다음
      </span>
    </div>
  )
}
