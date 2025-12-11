import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

export const BackgroundAnimation: React.FC = () => {
    const renderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!renderRef.current) return;

        const sketch = (p: p5) => {
            let particles: Particle[] = [];
            const numParticles = 80;

            p.setup = () => {
                const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
                canvas.position(0, 0);
                canvas.style('z-index', '-1');
                canvas.style('position', 'fixed');
                // Colors from theme: Slate 900 bg
                // Particles will be blue/purple
                for (let i = 0; i < numParticles; i++) {
                    particles.push(new Particle(p));
                }
            };

            p.windowResized = () => {
                p.resizeCanvas(p.windowWidth, p.windowHeight);
            };

            p.draw = () => {
                p.clear();
                // We don't need background clearance as it's transparent or handled by CSS bg

                particles.forEach((particle) => {
                    particle.update();
                    particle.show();
                    particle.checkEdges();
                });

                // Connect particles
                connectParticles(p, particles);
            };
        };

        class Particle {
            pos: p5.Vector;
            vel: p5.Vector;
            size: number;
            p: p5;

            constructor(p: p5) {
                this.p = p;
                this.pos = p.createVector(p.random(p.width), p.random(p.height));
                this.vel = p.createVector(p.random(-0.5, 0.5), p.random(-0.5, 0.5));
                this.size = 3;
            }

            update() {
                this.pos.add(this.vel);
            }

            show() {
                this.p.noStroke();
                // Blueish accent color
                this.p.fill(59, 130, 246, 150);
                this.p.circle(this.pos.x, this.pos.y, this.size);
            }

            checkEdges() {
                if (this.pos.x < 0 || this.pos.x > this.p.width) this.vel.x *= -1;
                if (this.pos.y < 0 || this.pos.y > this.p.height) this.vel.y *= -1;
            }
        }

        function connectParticles(p: p5, particles: Particle[]) {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const d = p.dist(
                        particles[i].pos.x,
                        particles[i].pos.y,
                        particles[j].pos.x,
                        particles[j].pos.y
                    );

                    if (d < 120) {
                        // Map opacity based on distance
                        const alpha = p.map(d, 0, 120, 100, 0);
                        p.stroke(139, 92, 246, alpha); // Purple tint
                        p.strokeWeight(1);
                        p.line(
                            particles[i].pos.x,
                            particles[i].pos.y,
                            particles[j].pos.x,
                            particles[j].pos.y
                        );
                    }
                }
            }
        }

        const myP5 = new p5(sketch, renderRef.current);

        return () => {
            myP5.remove();
        };
    }, []);

    return <div ref={renderRef} />;
};
