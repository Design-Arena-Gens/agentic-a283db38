export default function Home() {
  return (
    <div className="container">
      <header>
        <h1>🌙 Melhor Horário para Dormir</h1>
        <p className="subtitle">De acordo com a Ciência</p>
      </header>

      <main>
        <section className="highlight-box">
          <h2>⏰ Horário Ideal</h2>
          <div className="time-range">
            <span className="time">22h - 23h</span>
          </div>
          <p className="description">
            Este é o horário mais recomendado pela ciência do sono para a maioria dos adultos.
          </p>
        </section>

        <section className="info-card">
          <h3>🧬 Por que este horário?</h3>
          <ul>
            <li>
              <strong>Ritmo Circadiano:</strong> O corpo naturalmente produz melatonina (hormônio do sono) entre 21h e 22h
            </li>
            <li>
              <strong>Sono Profundo:</strong> Dormir neste horário maximiza as fases de sono profundo (ondas lentas)
            </li>
            <li>
              <strong>Temperatura Corporal:</strong> A temperatura do corpo atinge seu ponto mais baixo entre 2h-4h da manhã
            </li>
            <li>
              <strong>Cortisol:</strong> Os níveis de cortisol começam a aumentar naturalmente por volta das 6h-8h da manhã
            </li>
          </ul>
        </section>

        <section className="info-card">
          <h3>⚡ Benefícios de dormir cedo</h3>
          <div className="benefits-grid">
            <div className="benefit">
              <span className="icon">🧠</span>
              <p>Melhor função cognitiva e memória</p>
            </div>
            <div className="benefit">
              <span className="icon">💪</span>
              <p>Recuperação muscular otimizada</p>
            </div>
            <div className="benefit">
              <span className="icon">❤️</span>
              <p>Saúde cardiovascular melhorada</p>
            </div>
            <div className="benefit">
              <span className="icon">🎯</span>
              <p>Maior produtividade durante o dia</p>
            </div>
          </div>
        </section>

        <section className="info-card">
          <h3>🔬 Duração do Sono</h3>
          <div className="sleep-duration">
            <div className="duration-item">
              <span className="age">Adultos (18-64 anos)</span>
              <span className="hours">7-9 horas</span>
            </div>
            <div className="duration-item">
              <span className="age">Idosos (65+ anos)</span>
              <span className="hours">7-8 horas</span>
            </div>
          </div>
          <p className="note">
            Se dormir às 22h-23h, você deve acordar entre 6h-8h da manhã
          </p>
        </section>

        <section className="info-card">
          <h3>💡 Dicas para Dormir Melhor</h3>
          <ol>
            <li>Evite telas (celular, TV, computador) 1-2 horas antes de dormir</li>
            <li>Mantenha o quarto escuro, silencioso e fresco (18-20°C)</li>
            <li>Evite cafeína após 14h</li>
            <li>Pratique exercícios físicos, mas não próximo da hora de dormir</li>
            <li>Estabeleça uma rotina consistente de sono</li>
            <li>Exponha-se à luz solar pela manhã</li>
          </ol>
        </section>

        <section className="warning-box">
          <h3>⚠️ Importante</h3>
          <p>
            Cada pessoa tem um cronotipo diferente (matutino, vespertino ou intermediário).
            Embora 22h-23h seja o ideal para a maioria, algumas pessoas podem se sentir melhor
            dormindo um pouco mais cedo ou mais tarde. O importante é manter a consistência
            e garantir 7-9 horas de sono de qualidade.
          </p>
        </section>

        <footer className="sources">
          <h4>📚 Fontes Científicas</h4>
          <ul>
            <li>National Sleep Foundation</li>
            <li>American Academy of Sleep Medicine</li>
            <li>Journal of Clinical Sleep Medicine</li>
            <li>Sleep Research Society</li>
          </ul>
        </footer>
      </main>
    </div>
  );
}
