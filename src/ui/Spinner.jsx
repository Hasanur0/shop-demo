export default function Spinner() {
  return (
    <div
      className="my-12 mx-auto w-16 aspect-square rounded-full animate-spin"
      style={{
        background: 'radial-gradient(farthest-side, #2563eb 94%, #0000) top/10px 10px no-repeat, conic-gradient(#0000 30%, #2563eb)',
        WebkitMask: 'radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0)',
        animation: 'spin 1.5s linear infinite',
      }}
    />
  )
}
