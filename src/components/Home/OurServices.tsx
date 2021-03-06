import React from 'react'

import Button from 'components/Auth/Button';
import {
    InnerContainer,
    OurService,
    Heading,
    SubTitle,
    Title,
    Row,
    Column,
    Card,
    CardThumb,
    CardBody,
    CardImage,
    CardTitle,
    Image,
} from "../../styles/common.styles";

const OurServices = () => {
  return (
      <OurService>
          <InnerContainer>
              <Heading>
                  <SubTitle>Our Services</SubTitle>
                  <Title>Perfect Services Give <br />For Your Mind</Title>
              </Heading>
              <Row>
                  <Column>
                      <Card>
                          <CardThumb>
                              <Image src="/creative.jpg" alt="" />
                          </CardThumb>
                          <CardBody>
                              {/* <CardImage src='/sr-1.png' /> */}
                              <CardTitle>Creative Activities </CardTitle>
                              <Button content="Register" />
                          </CardBody>
                      </Card>
                  </Column>
                  <Column>
                      <Card>
                          <CardThumb>
                              <Image src="/sport.jpg" alt="" />
                          </CardThumb>
                          <CardBody>
                              {/* <CardImage src='/sr-2.png' /> */}
                              <CardTitle>Sporting Activities</CardTitle>
                              <Button content="Register" />
                          </CardBody>
                      </Card>
                  </Column>
                  <Column>
                      <Card>
                          <CardThumb>
                              <Image src="/baby-edu.jpg" alt="" />
                          </CardThumb>
                          <CardBody>
                              {/* <CardImage src='/sr-3.png' /> */}
                              <CardTitle>Educational Activities</CardTitle>
                              <Button content="Register" />
                          </CardBody>
                      </Card>
                  </Column>
              </Row>
          </InnerContainer>
      </OurService>
  )
}

export default OurServices
