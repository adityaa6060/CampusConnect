import { SonarGrid } from './components/ui/sonar-grid'

function App() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0, zIndex: 0 }}>
      <SonarGrid
        ringWidth={90}
        speed={260}
        amplitude={2.2}
        pingEvery={2.4}
        interactive={true}
        spacing={26}
        baseOpacity={0.28}
        color="#000000"
        pingArea={[0.22, 0.18, 0.78, 0.82]}
        className="w-full h-full"
      />
    </div>
  )
}

export default App
