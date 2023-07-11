import './App.css';

function App() {
  return (
    <div className='bg-white'>
      <header>
        <div className='text-purple font-bold underline font-serif'>here</div>
        <div style={{height: '100px', width: '100px', backgroundColor: '#A4C1C6',}}></div>
        <div style={{height: '100px', width: '100px', backgroundColor: '#3C4D58',}}></div>
        <div style={{height: '100px', width: '100px', backgroundColor: '#6E4B5A',}}></div>
        <div style={{height: '100px', width: '100px', backgroundColor: '#f9f5e8',}}></div>
        <div style={{height: '100px', width: '100px', backgroundColor: '#2f2b2a',}}></div>
      </header>
      <h1 className='text-teal font-light font-sans'>Hello my name is Kate</h1>
      <p className='text-teal-black font-serif'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
      <button><span>Test Button</span></button>
      <button className='button button--outline'><span>Test Button</span></button>
      <button className='button button--outline--purple'><span>Test Button</span></button>
    </div>
  );
}

export default App;
