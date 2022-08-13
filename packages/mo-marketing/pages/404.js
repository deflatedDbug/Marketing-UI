import { Button, Container } from 'react-bootstrap';
import Link from 'next/link';

export default function Custom404() {
    return (
        <Container>
            <div className="text-center mt-128 mb-128">
                <h1 className="mb-24">Oops...seems something went wrong!</h1>
                <Link href="/">
                    <Button variant="light">Go Back</Button>
                </Link>
            </div>
        </Container>
    );
}
