import React from 'react';
import {
  Box,
  Button,
  Page,
  Container,
  Row,
  Col,
  Card,
  FormField,
  Input,
  InputArea,
  Checkbox,
  Dropdown,
  Text,
} from 'wix-style-react';

class WsrForm extends React.Component {
  state = {
    name: '',
    color: null,
    isAcceptingToU: false,
    funFact: '',
    submittedData: null,
  };

  renderHeader() {
    return (
      <Page.Header title="WSR Form" actionsBar={this.renderActionButtons()} />
    );
  }

  renderActionButtons = () => (
    <Box>
      <Box marginLeft="small" marginRight="small">
        <Button
          skin="light"
          onClick={() => {
            this.setState({
              name: '',
              color: null,
              isAcceptingToU: false,
              funFact: '',
            });
          }}
        >
          Clear
        </Button>
      </Box>
      <Box>
        <Button
          dataHook="form-submit"
          onClick={() =>
            this.setState({
              submittedData: {
                name: this.state.name,
                color: this.state.color,
                funFact: this.state.funFact,
              },
            })
          }
          disabled={this.state.name === '' || !this.state.isAcceptingToU}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );

  render() {
    return (
      <Page height="100vh" dataHook="form-root">
        {this.renderHeader()}
        <Page.Content>
          <Container>
            <Row stretchViewsVertically>
              <Col span={8}>
                <Card>
                  <Card.Header
                    title="WSR Form"
                    subtitle="Create your own page with wix-style-react"
                  />
                  <Card.Divider />
                  <Card.Content>
                    <Row>
                      <Col span={6}>
                        <FormField label="Name" required>
                          <Input
                            dataHook="name-input"
                            size="medium"
                            placeholder="Enter a name"
                            onChange={(e) =>
                              this.setState({ name: e.target.value })
                            }
                            value={this.state.name}
                          />
                        </FormField>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={6}>
                        <FormField label="Favorite Color">
                          <Dropdown
                            dataHook="form-color"
                            size="medium"
                            placeholder="Enter a color"
                            options={[
                              { id: 0, value: 'Red' },
                              { id: 1, value: 'Blue' },
                              { id: 2, value: 'Green' },
                              { id: 3, value: 'Yellow' },
                              { id: 3, value: 'Pink' },
                            ]}
                            onSelect={(color) =>
                              this.setState({ color: color.value })
                            }
                            value={this.state.color}
                          />{' '}
                        </FormField>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={8}>
                        <Checkbox
                          dataHook="form-tou"
                          size="small"
                          onChange={(e) =>
                            this.setState({ isAcceptingToU: e.target.checked })
                          }
                          checked={this.state.isAcceptingToU}
                        >
                          I agree to the terms of use
                        </Checkbox>
                      </Col>
                      <Col span={4}>{this.renderActionButtons()}</Col>
                    </Row>
                  </Card.Content>
                </Card>
              </Col>
              <Col span={4}>
                <Row>
                  <Card stretchVertically>
                    <Card.Header title="Extra" />
                    <Card.Divider />
                    <Card.Content>
                      <FormField label="Fun Fact">
                        <InputArea
                          dataHook="form-funfact"
                          value={this.state.funFact}
                          onChange={(e) =>
                            this.setState({ funFact: e.target.value })
                          }
                          placeholder="Enter Something Interesting"
                          size="normal"
                          minHeight="113px"
                        />
                      </FormField>
                    </Card.Content>
                  </Card>
                </Row>
                {this.state.submittedData && (
                  <Row>
                    <Card stretchVertically>
                      <Card.Header
                        dataHook="form-submitted-info-header"
                        title="Submitted Info"
                      />
                      <Card.Divider />
                      <Card.Content>
                        <Row>
                          <Col span={6}>
                            <Text>Name:</Text>
                          </Col>
                          <Col span={6}>
                            <Text>{this.state.submittedData.name}</Text>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={6}>
                            <Text>Favorite Color:</Text>
                          </Col>
                          <Col span={6}>
                            <Text>{this.state.submittedData.color}</Text>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={6}>
                            <Text>Fun Fact:</Text>
                          </Col>
                          <Col span={6}>
                            <Text>{this.state.submittedData.funFact}</Text>
                          </Col>
                        </Row>
                      </Card.Content>
                    </Card>
                  </Row>
                )}
              </Col>
            </Row>
          </Container>
        </Page.Content>
      </Page>
    );
  }
}

export default WsrForm;
