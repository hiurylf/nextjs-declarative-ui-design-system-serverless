import {FormEvent, useState} from 'react';
import axios from 'axios';

import {Input, Flex, Button, Text, Image} from '@chakra-ui/react';

export default function Newsletter(props) {

    const [email, setEmail] = useState('');

    function handleSignUpToNewsletter(event: FormEvent) {
        event.preventDefault();

        if (email) {
            axios.post('/api/subscribe', {email});
            setEmail('');
        }
    }

    return (
        <Flex
            as="main"
            height="100vh"
            justifyContent="center"
            alignItems="center"
        >
            <Flex
                as="form"
                onSubmit={handleSignUpToNewsletter}
                backgroundColor="gray.700"
                borderRadius="md"
                flexDir="column"
                alignItems="stretch"
                padding={8}
                marginTop={4}
                width="100%"
                maxW="400px"
            >
                <Image marginBottom={8} src="/nextjs.svg" alt="Next.js"/>

                <Text textAlign="center" fontSize="sm" color="gray.400" marginBottom={2}>
                    Assine a newsletter e receba os melhores conteúdos sobre programação!
                </Text>

                <Input
                    placeholder="Seu melhor e-mail"
                    marginTop={2}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Button
                    type="submit"
                    backgroundColor="purple.500"
                    height="50px"
                    borderRadius="sm"
                    marginTop={6}
                    _hover={{backgroundColor: 'purple.600'}}
                >
                    INSCREVER
                </Button>
            </Flex>
        </Flex>
    )
}
