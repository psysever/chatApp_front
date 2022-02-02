import DaumPostcode from 'react-daum-postcode'

const DaumPostApi = (props: any) => {
  const setAddr = props.setAddr
  const setAddrPopup = props.setAddrPopup
  const addrPopup = props.addrPopup
  const handleComplete = (data: any) => {
    let allAddress = data.address
    let extraAddress = ''

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName
      }
      allAddress += extraAddress !== '' ? ` (${extraAddress})` : ''
    }

    setAddr(allAddress)
    setAddrPopup(false)
  }

  const postCodeStyle: any = {
    display: 'block',
    position: 'absolute',
    top: '20%',
    width: '500px',
    height: '400px',
    zIndex: 100,
  }

  return (
    <>
      {addrPopup ? (
        <DaumPostcode
          onComplete={handleComplete}
          style={postCodeStyle}
          autoClose
        />
      ) : null}
    </>
  )
}

export default DaumPostApi
