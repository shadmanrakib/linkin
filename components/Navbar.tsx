import { Text, Flex, Spacer, Avatar, Button } from '@chakra-ui/react'
import React from 'react'
import { useUser } from '../hooks/useUser'
import { Link } from "@chakra-ui/react"
import { useRouter } from 'next/router'

const Navbar = () => {
    const user = useUser();
    const router = useRouter();

    return (
        <Flex h={16} px={8} alignItems="center">
            <Text fontSize="lg" fontWeight="bold">LinkIn</Text>
            <Spacer />
            {user ? <Avatar name={user.displayName || user.email || undefined} src={user.photoURL || undefined} size="sm" />
                :
                <Flex alignItems="center" gridGap={6}>
                    <Button variant="link" onClick={() => router.push("login")}>Log in</Button>
                    <Button colorScheme="messenger" onClick={() => router.push("signup")}>Sign up</Button>
                </Flex>
            }
        </Flex>
    )
}

export default Navbar
