import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve renderizar dois comentários', () => {
        render(<PostComment />)

        //adicionando primeiro comentario
        fireEvent.change(screen.getByTestId('value-comment'), {
            target: {
                value: 'Comentario de teste'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comment'))

        //adicionando segundo commentario
        fireEvent.change(screen.getByTestId('value-comment'), {
            target: {
                value: 'Segundo comentário de teste'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comment'))

        expect(screen.getAllByTestId('comment-element')).toHaveLength(2)
    })
});