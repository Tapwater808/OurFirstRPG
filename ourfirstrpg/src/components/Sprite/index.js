const Sprite = ({image, position, status}) => {
  return (
    <div
      style={{
        position: "absolute",
        top: position.y,
        left: position.x,
        width: status.width,
        height: status.height,
        backgroundImage: image,
        backgroundRepeat: "no-repeat",
        backgroundPosition: `-${status.x}px -${status.y}px`
      }}
    />
  )
}

export default Sprite;