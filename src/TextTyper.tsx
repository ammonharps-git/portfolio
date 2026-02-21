import { useState, useEffect } from 'react'
import './TextTyper.css'

interface TextTyperProps {
    roles : string[],
}

function TextTyper(props: TextTyperProps) {
  const [text, setText] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isCursorBlinking, setIsCursorBlinking] = useState(false)

  const typingSpeed = 60
  const deletingSpeed = 40
  const endPauseTime = 1000
  const startPauseTime = 200

  const roles = props.roles;

  function getCommonPrefix(a: string, b: string) {
    let i = 0
    while (i < a.length && a[i] === b[i]) {
      i++
    }
    return a.substring(0, i)
  }

  useEffect(() => {
    const current = roles[roleIndex]
    const next = roles[(roleIndex + 1) % roles.length]
    const prefix = getCommonPrefix(current, next)

    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting) {
      // typing forward
      if (text.length < current.length) {
        setIsCursorBlinking(false);
        timeout = setTimeout(() => {
          setText(current.substring(0, text.length + 1))
        }, typingSpeed)
      } else {
        setIsCursorBlinking(true);
        timeout = setTimeout(() => {
          setIsDeleting(true)
        }, endPauseTime)
      }
    } else {
      // deleting backward to shared prefix
      if (text.length > prefix.length) {
        setIsCursorBlinking(false);
        timeout = setTimeout(() => {
          setText(current.substring(0, text.length - 1))
        }, deletingSpeed)
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }, startPauseTime)
      }
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

  return (
    <h2>
      {text}
      <span className={"cursor" + (isCursorBlinking ? " cursor-blink" : "")}>|</span>
    </h2>
  )
}

export default TextTyper
