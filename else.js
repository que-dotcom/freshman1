    const canvas = document.getElementById('bgCanvas');
    const ctx = canvas.getContext('2d');
    let W, H;
    let layers = [];
    let lastTime = 0;

    class MountainLayer {
      constructor({ color, peaks, minAmp, maxAmp, period, dynamic = false }) {
        this.color = color;
        this.peaks = peaks;
        this.minAmp = minAmp;
        this.maxAmp = maxAmp;
        this.period = period;
        this.offset = 0;
        this.dynamic = dynamic;
        this.points = [];
        this._generate();
      }

      _generate() {
        const totalW = W * 2;
        const step = totalW / (this.peaks - 1);
        this.points = [];

        for (let i = 0; i < this.peaks; i++) {
          const x = i * step;
          const amp = this.minAmp + Math.random() * (this.maxAmp - this.minAmp);
          const baseY = H * (1 - amp);
          const noiseSeed = Math.random() * 1000;
          this.points.push({ x, baseY, fixedY: null, seed: noiseSeed });
        }
      }

      draw(deltaTime, time) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(-this.offset, H);

        const speed = W / this.period;
        this.offset += speed * (deltaTime / 1000);
        if (this.offset > W) this.offset -= W;

        this.points.forEach((p, i) => {
          let drawX = p.x - this.offset;

          if (drawX >= 0 && drawX <= W) {
            if (p.fixedY === null) {
              let dynamicY = p.baseY;
              if (this.dynamic) {
                const freq = 0.002;
                const amp = 10;
                dynamicY += Math.sin(p.seed + time / 300) * amp;
              }
              p.fixedY = dynamicY;
            }
          } else {
            p.fixedY = null;
          }

          ctx.lineTo(drawX, p.fixedY ?? p.baseY);
        });

        ctx.lineTo(W * 2 - this.offset, H);
        ctx.closePath();
        ctx.fill();
      }
    }

    const stars = Array.from({ length: 100 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight * 0.6,
      size: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.5
    }));

    function drawSkyBackground(time) {
      const cycle = 90;
      const seconds = (time / 1000) % cycle;

      let startColor, endColor, progress;
      let showSun = false;
      let showStars = false;

      if (seconds < 22.5) {
        startColor = [135, 206, 250];
        endColor = [255, 165, 0];
        progress = seconds / 22.5;
        showSun = true;
      } else if (seconds < 45) {
        startColor = [255, 165, 0];
        endColor = [135, 206, 250];
        progress = (seconds - 22.5) / 22.5;
      } else if (seconds < 67.5) {
        startColor = [135, 206, 250];
        endColor = [25, 25, 112];
        progress = (seconds - 45) / 22.5;
      } else {
        startColor = [25, 25, 112];
        endColor = [15, 15, 40];
        progress = (seconds - 67.5) / 22.5;
        showStars = true;
      }

      const r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * progress);
      const g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * progress);
      const b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * progress);

      const gradient = ctx.createLinearGradient(0, 0, 0, H);
      gradient.addColorStop(0, `rgb(${r},${g},${b})`);
      gradient.addColorStop(1, `rgb(${Math.floor(r * 0.7)}, ${Math.floor(g * 0.7)}, ${Math.floor(b * 0.7)})`);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, W, H);

      if (showSun) drawSun(time);
      if (showStars) drawStars(time);
    }

    function drawSun(time) {
      const seconds = (time / 1000) % 90;
      const t = seconds / 22.5;
      const sunX = W / 2;
      const sunY = H - H * 0.7 * t;

      ctx.beginPath();
      ctx.arc(sunX, sunY, 40, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 223, 0, 0.8)';
      ctx.fill();
    }

    function drawStars(time) {
      stars.forEach(star => {
        const flicker = 0.3 + 0.7 * Math.abs(Math.sin((time + star.x) * 0.001));
        ctx.beginPath();
        ctx.globalAlpha = star.alpha * flicker;
        ctx.fillStyle = 'white';
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
    }

    function onResize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;

      layers = [
        new MountainLayer({
          color: 'rgba(71,126,29,0.7)',
          peaks: 12,
          minAmp: 0.15,
          maxAmp: 0.30,
          period: 30,
          dynamic: true
        }),
        new MountainLayer({
          color: 'rgba(71,126,29,0.9)',
          peaks: 16,
          minAmp: 0.30,
          maxAmp: 0.50,
          period: 40,
          dynamic: false
        })
      ];
    }

    function animate(time = 0) {
      const deltaTime = time - lastTime;
      lastTime = time;

      drawSkyBackground(time);
      layers.forEach(layer => layer.draw(deltaTime, time));

      requestAnimationFrame(animate);
    }

    window.addEventListener('resize', onResize);
    onResize();
    animate();