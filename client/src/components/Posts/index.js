import React from 'react';
import { Card, Row, Col, Image, Button } from 'react-bootstrap';
import TimeAgo from 'react-timeago';

const Posts = (props) => {
  const { posts } = props;
  return (
    <Row className='mt-5'>
      {posts.map((post, i) => {
        const { title, content, thumbnail, user, date } = post;
        const { firstname, lastname, avatar } = user;
        const excerpt = content.slice(0, 70);

        if (i === 0) {
          return (
            <div className='post-card-block mb-5'>
              <Col xs={12} md={12}>
                <Row>
                  <Col xs={6} md={6} className='post-card-thumbnail'>
                    <Image src={thumbnail} fluid />
                  </Col>
                  <Col xs={6} md={6}>
                    <div className='post-user mb-3'>
                      <Image src={avatar} thumbnail roundedCircle />
                      <p className='text-primary ml-2'>
                        <strong>
                          {firstname} {lastname}
                          <span className='ml-2 mr-2'>&bull;</span>
                          <TimeAgo date={date} />
                        </strong>
                      </p>
                    </div>
                    <h3>{title}</h3>
                    <div
                      dangerouslySetInnerHTML={{ __html: `${excerpt}...` }}
                    />
                    <Button>Read More</Button>
                  </Col>
                </Row>
              </Col>
            </div>
          );
        } else {
          return (
            <Col xs={4} md={4}>
              <div className='post-card-thumbnail-2'>
                <Image src={thumbnail} fluid />
              </div>
              <div className='post-user mt-2 mb-2'>
                <Image src={avatar} thumbnail roundedCircle />
                <p className='text-primary ml-2'>
                  <strong>
                    {firstname} {lastname}
                    <span className='ml-2 mr-2'>&bull;</span>
                    <TimeAgo date={date} />
                  </strong>
                </p>
              </div>
              <h4 className='mb-3'>{title}</h4>
              <div dangerouslySetInnerHTML={{ __html: `${excerpt}...` }} />
              <Button>Read More</Button>
            </Col>
          );
        }
      })}
    </Row>
  );
};

export default Posts;
