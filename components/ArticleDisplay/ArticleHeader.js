import React from "react";
import Date from "../Date";
import utilStyles from "../../styles/utils.module.css";
import Chip from "@mui/material/Chip";

const ArticleHeader = ({ title, data, tag, ...article }) => {
  return (
    <section>
      <h1 className={utilStyles.headingXl}>{title}</h1>
      <div className={utilStyles.lightText}>
        <Date dateString={article.lastModified} />
      </div>
      {article&&data ? (
        <>
          {tag ? <Chip color="primary" variant="outlined" label={tag} /> : ''}
          <div className="stats-info">
            {`共${article.totalWords}词，生词率${(
              (data.unknownWord.length / article.wordsUnique.length) *
              100
            ).toFixed(2)}%，目标词率${(
              (data.targetWord.length / article.wordsUnique.length) *
              100
            ).toFixed(2)}%`}
          </div>
        </>
      ) : (
        ""
      )}
    </section>
  );
};
export default ArticleHeader;
