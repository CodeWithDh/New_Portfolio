import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

/**
 * ProjectCard — reusable project card.
 *
 * Props:
 *   title       — string
 *   description — string
 *   tech        — string[]
 *   images      — string[]   (optional — shows slider when provided)
 *   githubUrl   — string     (link to GitHub repo)
 *   liveUrl     — string     (optional — live demo link)
 *   stars       — number     (optional)
 *   language    — string     (optional — primary language badge)
 *   index       — number     (used for stagger animation delay)
 */
export default function ProjectCard({
  title,
  description,
  tech = [],
  images = [],
  githubUrl,
  liveUrl,
  stars = 0,
  language,
  index = 0,
}) {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
    >
      {/* Image slider */}
      {images.length > 0 ? (
        <div className="pc-img-wrap">
          <Swiper
            className="pc-swiper"
            modules={[Autoplay, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            loop={images.length > 1}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
          >
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt={`${title} screenshot ${i + 1}`}
                  className="pc-img"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        /* Fallback banner when no images */
        <div className="pc-img-placeholder">
          <span className="pc-placeholder-icon">{"</>"}</span>
        </div>
      )}

      <div className="pc-body">
        {/* Title row */}
        <div className="pc-title-row">
          <h3 className="pc-title">{title}</h3>
          <div className="pc-meta">
            {language && <span className="pc-lang">{language}</span>}
            {stars > 0 && (
              <span className="pc-stars">⭐ {stars}</span>
            )}
          </div>
        </div>

        <p className="pc-desc">{description}</p>

        {/* Tech pills */}
        {tech.length > 0 && (
          <div className="pc-tech">
            {tech.map((t) => (
              <span className="pc-pill" key={t}>{t}</span>
            ))}
          </div>
        )}

        {/* Action links */}
        <div className="pc-links">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pc-btn pc-btn-gh"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="pc-btn-icon">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pc-btn pc-btn-live"
            >
              🔗 Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
