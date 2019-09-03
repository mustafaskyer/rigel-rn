/****
 * Create Modal Component for cities, ...others options
 * props {
 *  onClose,
 *  onBack,
 *  onSelect,
 *  data,
 *  style,
 *  search
 *  visibility
 * }
 * created by { Author: 'Mustafa Skyer' }
 */
import React from "react";
import {
	View,
	Text,
	TouchableOpacity,
	TextInput,
	FlatList,
	I18nManager
} from "react-native";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/MaterialIcons";
import LinearGradient from "react-native-linear-gradient";
import {colors} from "styles/colors";
import _ from "lodash";
import produce from 'immer'

const Header = props => (
	<LinearGradient
		colors={[colors.green, colors.green, "#8bc34a", "#4caf50"]}
		style={{ height: 80, width: "100%" }}
	>
		<View
			style={{
				width: "100%",
				alignItems: "center",
				flexDirection: "row",
				justifyContent: "space-between",
				paddingHorizontal: 11,
				marginTop:40,
			}}
		>
			{/* start */}
			<TouchableOpacity
				onPress={() => props.close()}
				style={{
					width: 50,
					justifyContent: "center",
					alignItems: "center"
				}}
			>
				<Icon name={"close"} size={27} color="#FFF" />
			</TouchableOpacity>
			<View style={{ justifyContent: "center", alignItems: "center" }}>
				<Text
					style={{
						color: "#FFF",
						fontFamily: "ExpoArabic-Medium",
						fontSize: 17,
						fontWeight: "600"
					}}
				>
					{props.title || '_'}
				</Text>
			</View>
			<TouchableOpacity
				style={{
					width: 50,
					// height: 100,
					justifyContent: "center",
					alignItems: "center"
				}}
			>
				{/* <Icon name={'check'} size={23} color='#000' /> */}
			</TouchableOpacity>
		</View>
	</LinearGradient>
);

export default class ModalComponents extends React.Component {
	state = {}

	filterCities(name) {
  let matches = _.filter(this.props.data, obj => _.startsWith(obj.name.toLowerCase(), name.toLowerCase()))
  this.setState(
   produce(draft => {
       draft.filteredCities = matches
   })
  )
	}

	render() {
		return (
			<View
				style={[{  flex:0 }, this.props.style]}
			>
				<Modal
					isVisible={this.props.isVisible}
					style={[
						{
							flex: 1,
							width: "100%",
							height: "100%",
							margin: 0,
							padding: 0,
							backgroundColor: "#FFF"
						},
						this.props.modalStyle
					]}
					animationIn={"slideInUp"}
				>
					{/* Header of Modal */}
					<Header {...this.props} />
					<LinearGradient
						style={{ height: 45, width: "100%", alignSelf: "flex-start" }}
						colors={[
							"#FFF",
							"#FFF",
							"#FFF",
							"#FFF",
							"#FFF",
							"#FFF",
							"#FFF",
							"#FFF",
							"#FFF",
							"#FFF",
							"#FFF",
							"#FFF",
							"#ddd"
						]}
					>
						<View
							style={{
								height: 45,
								width: "100%",
								alignSelf: "flex-start",
								paddingStart: 30
							}}
						>
							<TextInput
								style={{
									flex: 1,
									padding: 7,
									fontSize: 17,
									fontFamily: "ExpoArabic-Medium",
									fontWeight: "300",
									textAlign: I18nManager.isRTL ? "right" : "left",
									alignItems: "flex-start",
									alignSelf: "flex-start",
									width: "100%",
									maxWidth: "100%",
									zIndex: 9999,
									opacity: 1
								}}
        maxLength={40}
        onChangeText={text => this.filterCities(text)}
								placeholder={"S E A R C H"}
							/>
						</View>
					</LinearGradient>

					
					<View style={{ flex: 1, paddingHorizontal: 19 }}>
						<FlatList
							style={{ flex: 1 }}
							data={this.state.filteredCities || this.props.data}
							showsVerticalScrollIndicator={false}
							renderItem={({ item }) => {
								return (
									<TouchableOpacity
         onPress={() => {
          this.props.getCity(item)
          this.props.close()
         }}
										style={{
											width: "100%",
											paddingLeft: 21,
											height: 70,
											justifyContent: "center",
											alignItems: "flex-start",
											borderBottomWidth: 0.3,
											borderBottomColor: "#ccc"
										}}
									>
										<Text
											style={{
												fontSize: 17,
												fontWeight: "300",
												fontFamily: "ExpoArabic-Medium",
												textAlign: "left"
											}}
										>
											{item.name}
										</Text>
									</TouchableOpacity>
								);
							}}
						/>
					</View>
				</Modal>
			</View>
		);
	}
}
