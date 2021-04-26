import { InputGroup, FormControl } from 'react-bootstrap';

export default function SearchBar(props) {
  const { updateGuess } = props;

  return (
    <div>
      <InputGroup className='mb-3'>
        <FormControl
          placeholder='Enter Picture guess'
          aria-label='Guess'
          aria-describedby='basic-addon2'
          type='text'
          onChange={(e) => updateGuess(e.target.value)}
        />
      </InputGroup>
    </div>
  );
}