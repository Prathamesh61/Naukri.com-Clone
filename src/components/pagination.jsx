import { Button, HStack } from "@chakra-ui/react"

export function Pagination({ current, onChange, total }) {
    const prev = <Button size='sm'
        onClick={() => onChange(current => current - 1)}
        disabled={current === 1}>PREV</Button>
    const next = <Button size='sm'
        onClick={() => onChange(current => current + 1)}
        disabled={current === total}>NEXT</Button>
    const pages = new Array(total)
        .fill(0).map((a, i) => {
            return <Button bg="#4a90e2" size='sm' onClick={() =>
                onChange(i + 1)}
                disabled={current === (i + 1)} > {i + 1}
            </Button>
        })
    return (
        <HStack >
            {prev}
            {pages}
            {next}
        </HStack>
    )
}