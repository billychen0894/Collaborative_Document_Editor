import Header from "./components/Header.tsx";

export default function App() {

  return (
      <div className="min-h-screen bg-gray-100">
          <Header/>
          <main className="container mx-auto mt-8 p-4">
              <h2 className="text-xl font-semibold mb-4">Welcome to our Collaborative Document Editor</h2>
              <p className="text-gray-600">Start editing your documents in real-time with your team!</p>
          </main>
      </div>
  )
}

