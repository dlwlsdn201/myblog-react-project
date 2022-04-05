import '../styles/home/index.css';
import React from 'react';

const Home = () => {
  return (
    <div>
      <main className="container">
        <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark intro-card">
          <div className="col-md-6 px-0">
            <h1 className="display-4 fst-italic">게으른 완벽주의 INFJ</h1>
            <p className="lead my-3">개발 중</p>
            <p className="lead mb-0">
              <a href="#" className="text-white fw-bold">
                반갑습니다
              </a>
            </p>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">
                  New Skill
                </strong>
                <h3 className="mb-0">Title</h3>
                <div className="mb-1 text-muted">datetime</div>
                <p className="card-text mb-auto">간략한 내용</p>
                <a href="#" className="stretched-link">
                  포스트 자세히 보기
                </a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <svg
                  className="bd-placeholder-img"
                  width="200"
                  height="250"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: 포스트 이미지"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    포스트 이미지
                  </text>
                </svg>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success">
                  New Project
                </strong>
                <h3 className="mb-0">Title</h3>
                <div className="mb-1 text-muted">datetime</div>
                <p className="card-text mb-auto">간략한 내용</p>
                <a href="#" className="stretched-link">
                  포스트 자세히 보기
                </a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <svg
                  className="bd-placeholder-img"
                  width="200"
                  height="250"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: 포스트 이미지"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    포스트 이미지
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="blog-footer">
        <p style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ marginRight: '15px' }}>
            <strong>E-mail</strong>: dlwlsdn201@naver.com
          </div>
          <div>
            {' '}
            <strong>Github</strong>:{' '}
            <a href="https://github.com/dlwlsdn201">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="black"
                className="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
          </div>
        </p>
      </footer>
    </div>
  );
};

export default Home;
