export function formatAvatarFallback(name: string, lastname?: string) {
  return `${name.split('')[0]}${lastname?.split('')[0]}`
}
