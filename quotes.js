let prev = 1;
        function changeQuote() {
            quotes = [
                {
                    'author': 'Oscar Wilde',
                    'quote': 'Be yourself; everyone else is already taken.'
                },
                {
                    'author': 'Frank Zappa',
                    'quote': 'So many books, so little time.'
                },
                {
                    'author': 'Albert Einstein',
                    'quote': 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.'
                },
                {
                    'author': 'Marcus Tullius Cicero',
                    'quote': 'A room without books is like a body without a soul.'
                },
                {
                    'author': 'Mae West',
                    'quote': 'You only live once, but if you do it right, once is enough.'
                },
                {
                    'author': 'Mahatma Gandhi',
                    'quote': 'Be the change that you wish to see in the world.'
                },
                {
                    'author': 'Mark Twain',
                    'quote': 'If you tell the truth, you don\'t have to remember anything.'
                },
                {
                    'author': 'Elbert Hubbard',
                    'quote': 'A friend is someone who knows all about you and still loves you.'
                },
                {
                    'author': 'Oscar Wilde',
                    'quote': 'To live is the rarest thing in the world. Most people exist, that is all.'
                },
                {
                    'author': 'Paul Auster',
                    'quote': 'Memory is the space in which a thing happens for a second time.'
                },
                {
                    'author': 'Stephen Chbosky, The Perks of Being a Wallflower',
                    'quote': 'We accept the love we think we deserve.'
                },
                {
                    'author': 'Andre Gide, Autumn Leaves',
                    'quote': 'It is better to be hated for what you are than to be loved for what you are not.'
                },
                {
                    'author': 'Friedrich Nietzsche',
                    'quote': 'It is not a lack of love, but a lack of friendship that makes unhappy marriages.'
                },
            ];

            let idx = Math.floor(Math.random() * quotes.length);
            if(idx == prev)
            {
                idx = Math.floor(Math.random() * quotes.length);
            }
            prev = idx;
            document.getElementById('auth').innerHTML = `--${quotes[idx].author}`;
            document.getElementById('quo').innerHTML = `"${quotes[idx].quote}"`;
        }