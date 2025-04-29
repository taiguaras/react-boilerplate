import Counter from '../components/Counter';

export default function ReduxTest() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white">Redux Test</h1>
          <p className="text-blue-100">Testing Redux integration with a counter component</p>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Counter />
        </div>
      </main>
    </div>
  );
} 