import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

/**
 * ExperienceCard — renders a single experience timeline item.
 *
 * Props:
 *   icon       — React node (e.g. <WorkIcon />)
 *   title      — string  e.g. "Smart Mobile Shop"
 *   role       — string  e.g. "Full Stack Developer"
 *   type       — string  e.g. "Freelance Client"
 *   period     — string  e.g. "2023 — 2024"
 *   description— string
 *   tech       — string[]  e.g. ["React.js", "Node.js"]
 *   images     — string[]  imported image paths
 *   isLast     — bool   hide the connector line after the last card
 */
export default function ExperienceCard({
  icon,
  title,
  role,
  type,
  period,
  description,
  tech = [],
  images = [],
  isLast = false,
}) {
  return (
    <div className="timeline-item">
      {/* Left meta */}
      <div className="timeline-meta">
        <span className="timeline-period">{period}</span>
      </div>

      {/* Center dot + connector line */}
      <div className="timeline-center">
        <div className="timeline-dot">
          <div className="timeline-dot-inner" />
        </div>
        {!isLast && <div className="timeline-line" />}
      </div>

      {/* Right card */}
      <div className="timeline-card">
        <div className="card-header">
          <div className="card-icon">{icon}</div>
          <div>
            <h3 className="card-title">{title}</h3>
            <div className="card-meta-row">
              <span className="card-role">{role}</span>
              <span className="card-type-badge">{type}</span>
            </div>
          </div>
        </div>

        <p className="card-desc">{description}</p>

        {tech.length > 0 && (
          <div className="card-tech">
            {tech.map((t) => (
              <span className="card-tech-pill" key={t}>
                {t}
              </span>
            ))}
          </div>
        )}

        {images.length > 0 && (
          <div className="card-slider-wrap">
            <Swiper
              className="card-swiper"
              modules={[Autoplay, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              loop={images.length > 1}
              autoplay={{ delay: 2500 }}
              pagination={{ clickable: true }}
            >
              {images.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt={`${title} screenshot ${i + 1}`}
                    className="card-slide-img"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
}
