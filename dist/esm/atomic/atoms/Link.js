import React from 'react';
import Text from '../ions/Text';
import GalioTheme, { withGalio } from '../../theme';
const LinkDefaultProps = {
    // children: null,
    theme: GalioTheme,
};
function Link(props) {
    props = {
        ...LinkDefaultProps,
        ...props
    };
    const { children, onPress, theme, ...rest } = props;
    return (<Text color={theme.COLORS.PRIMARY} onPress={() => onPress()} {...rest}>
      {children}
    </Text>);
}
export default withGalio(Link);
// Link.defaultProps = {
//   children: null,
//   theme: GalioTheme,
// };
// Link.propTypes = {
//   children: PropTypes.any,
//   theme: PropTypes.any,
//   onPress: PropTypes.func.isRequired,
// };
//# sourceMappingURL=Link.js.map