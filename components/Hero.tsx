import React from 'react'

import { Box, Button, Flex, Link, Text } from '@chakra-ui/react'

import { useRouter } from 'next/router'

const Hero = () => {
    const router = useRouter();

    return (
        <Flex px={8} py={20} justify="center" direction="column">
            <Text fontSize="6xl" textAlign="center">
                {"The Only Link You'll Ever Need" /*For eslint purposes*/}
            </Text>
            <Text fontSize="3xl" fontWeight="light" textAlign="center" mt={4}>
                {"Connect with your audience with just one link" /*For eslint purposes*/}
            </Text>
            <Flex justify="center" mt={16}>
                <Button alignSelf="center" colorScheme="messenger" px={10} py={8} fontSize="xl">Get start for free</Button>
            </Flex>
            <Text fontSize="md" textAlign="center" mt={6}>
                {"Already have an account?" /*For eslint purposes*/}
                <Link pl={1} onClick={() => router.push('login')}>Log in</Link>
            </Text>
        </Flex>
    )
}

export default Hero
