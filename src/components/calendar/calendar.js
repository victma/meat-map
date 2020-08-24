import React, { Component } from 'react';
import CalendarLine from './calendarLine';
import styled from '@emotion/styled';
import { colors, animation } from '../constants';

const month = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
const currentMonth = (new Date()).getMonth();

const Container = styled.div({
  margin: 16,
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  rowGap: 8,
  columnGap: 8,
  overflowX: 'scroll',
})

const Month = styled.div({
  border: `2px solid ${colors.lightBrown}`,
  borderRadius: 4,
  padding: 4,
  textAlign: 'center',
  cursor: 'pointer',
  gridRow: '1 /span 1',
  transition: animation.transition.default,
}, props => ({
  gridColumn: `${props.column} / span 1`,
  backgroundColor: props.highlighted ? colors.lightBrown : 'transparent',
}))

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMonth: currentMonth,
      selectedPart: null,
    };
  }

  onHoverMonth = (monthId, hoverIn) => {
    this.setState({
      selectedMonth: hoverIn ? monthId : currentMonth,
      selectedPart: null,
    });
  }

  onHoverPart = (partId, hoverIn) => {
    this.setState({
      selectedPart: hoverIn ? partId : null,
      selectedMonth: hoverIn ? null : currentMonth,
    })
  }

  monthShouldBeHighLighted(month) {
    if (this.state.selectedMonth !== null) {
      return month === this.state.selectedMonth;
    }
    const selectedPart = this.props.parts[this.state.selectedPart];

    return this.partContainsMonth(selectedPart.start, selectedPart.end, month + 1)
  }

  partShouldBeHighlighted(partId) {
    if (this.state.selectedPart !== null) {
      return partId === this.state.selectedPart;
    }
    const selectedPart = this.props.parts[partId];

    return this.partContainsMonth(selectedPart.start, selectedPart.end, this.state.selectedMonth + 1);
  }

  partContainsMonth(partStart, partEnd, month) {
    if (partStart <= partEnd) {
      return partStart <= month && month <= partEnd;
    }

    return partStart <= month || month <= partEnd;
  }

  render() {
    return (
      <Container>
      {month.map((m, i) => (
        <Month
          key={i}
          column={i + 1}
          highlighted={this.monthShouldBeHighLighted(i)}
          onMouseEnter={() => this.onHoverMonth(i, true)}
          onMouseLeave={() => this.onHoverMonth(i, false)}
        >{m}</Month>
      ))}
      {this.props.parts.map((part, i) => (
        <CalendarLine 
          {...part}
          key={i}
          row={2 + i}
          highlighted={this.partShouldBeHighlighted(i)}
          onHover={hoverIn => this.onHoverPart(i, hoverIn)}
          background={this.props.images.find(i => (i.name === part.name.toLowerCase().replace(/é|è|ê/, 'e')))}
        />
      ))}
    </Container>
    );
  }
}

export default Calendar;
