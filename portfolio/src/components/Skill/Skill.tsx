// components/Skill/Skill.tsx
import React, { useEffect, useRef } from 'react';
import cytoscape from 'cytoscape';

const Skill: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) {
      return;
    }

    const cy = cytoscape({
      container: container.current,
      elements: [
        { data: { id: 'frontend', label: 'FrontEnd', color: 'green' } },
        { data: { id: 'html', label: 'HTML' } },
        { data: { id: 'css', label: 'CSS' } },
        { data: { id: 'js', label: 'JavaScript' } },
        { data: { id: 'react', label: 'React' } },
        { data: { id: 'ts', label: 'TypeScript' } },
        { data: { id: 'nextjs', label: 'Next.js' } },
        { data: { source: 'frontend', target: 'html' } },
        { data: { source: 'frontend', target: 'css' } },
        { data: { source: 'frontend', target: 'js' } },
        { data: { source: 'frontend', target: 'react' } },
        { data: { source: 'frontend', target: 'ts' } },
        { data: { source: 'frontend', target: 'nextjs' } },
      ],
      style: [
        {
          selector: 'node',
          style: {
            'background-color': 'data(color)',
            label: 'data(label)',
            'text-valign': 'center',
            'text-halign': 'center',
            color: 'white',
            'font-size': 12,
          },
        },
        {
          selector: 'edge',
          style: {
            'curve-style': 'bezier',
            width: 2,
            'line-color': '#ccc',
          },
        },
      ],
      layout: {
        name: 'cose',
      },
    });

    cy.on('grab', 'node', (event) => {
      event.target.connectedEdges().addClass('highlight');
    });

    cy.on('free', 'node', (event) => {
      event.target.connectedEdges().removeClass('highlight');
    });

    return () => {
      cy.destroy();
    };
  }, [container]);

  return (
    <div
      ref={container}
      style={{ width: '100%', height: '100%', minHeight: '400px' }}
    ></div>
  );
};

export default Skill;
