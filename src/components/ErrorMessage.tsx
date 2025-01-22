export default function ErrorMessage({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="text-destructive -mt-1 text-sm">{children}</div>
}
