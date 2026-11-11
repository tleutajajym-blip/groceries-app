
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen({ navigation }) {
  const menuItems = [
    {
      title: 'My Orders',
      subtitle: 'View your order history',
      icon: 'cube-outline',
    },
    {
      title: 'My Address',
      subtitle: 'Manage your delivery address',
      icon: 'location-outline',
      screen: 'Address',
    },
    {
      title: 'Location',
      subtitle: 'Manage your location',
      icon: 'navigate-outline',
      screen: 'Location',
    },
    {
      title: 'Notifications',
      subtitle: 'Manage your notifications',
      icon: 'notifications-outline',
      screen: 'Notification',
    },
    {
      title: 'Payment Methods',
      subtitle: 'Manage your payment methods',
      icon: 'card-outline',
    },
    {
      title: 'Help Center',
      subtitle: 'Get help and support',
      icon: 'help-circle-outline',
    },
    {
      title: 'About',
      subtitle: 'Learn more about us',
      icon: 'information-circle-outline',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Profile</Text>
          <TouchableOpacity>
            <Ionicons name="settings-outline" size={24} color="#181725" />
          </TouchableOpacity>
        </View>

        <View style={styles.profile}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={48} color="#53B175" />
          </View>

          <View style={styles.profileInfo}>
            <Text style={styles.name}>Your Name</Text>
            <Text style={styles.email}>your@email.com</Text>
          </View>

          <TouchableOpacity>
            <Ionicons name="create-outline" size={23} color="#53B175" />
          </TouchableOpacity>
        </View>

        <View style={styles.divider} />

        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => {
              if (item.screen) {
                navigation?.navigate(item.screen);
              }
            }}
          >
            <Ionicons name={item.icon} size={25} color="#181725" />

            <View style={styles.menuContent}>
              <Text style={styles.menuTitle}>{item.title}</Text>
              <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={20}
              color="#B3B3B3"
            />
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.logout}>
          <Ionicons name="log-out-outline" size={23} color="#53B175" />
          <Text style={styles.logoutText}>Log Out</Text>
          <Ionicons
            name="chevron-forward"
            size={20}
            color="#53B175"
            style={{ marginLeft: 'auto' }}
          />
        </TouchableOpacity>

        <Text style={styles.version}>Version 1.0.0</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 22,
  },
  header: {
    height: 65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#181725',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 23,
  },
  avatar: {
    width: 65,
    height: 65,
    borderRadius: 35,
    backgroundColor: '#F2F8F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInfo: {
    flex: 1,
    marginLeft: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#181725',
  },
  email: {
    fontSize: 13,
    color: '#7C7C7C',
    marginTop: 6,
  },
  divider: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginBottom: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 17,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
  },
  menuContent: {
    flex: 1,
    marginLeft: 15,
  },
  menuTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#181725',
  },
  menuSubtitle: {
    fontSize: 11,
    color: '#7C7C7C',
    marginTop: 5,
  },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F8F3',
    padding: 17,
    borderRadius: 15,
    marginTop: 25,
  },
  logoutText: {
    color: '#53B175',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 12,
  },
  version: {
    textAlign: 'center',
    color: '#AAAAAA',
    marginTop: 20,
    marginBottom: 30,
    fontSize: 12,
  },
});
