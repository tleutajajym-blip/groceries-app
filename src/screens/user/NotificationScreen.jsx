
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Switch,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function NotificationScreen({ navigation }) {
  const [settings, setSettings] = useState({
    order: true,
    offers: true,
    promotions: false,
    updates: true,
    sound: true,
    vibration: false,
  });

  const notificationItems = [
    {
      title: 'Order Updates',
      subtitle: 'Get updates about your orders',
      icon: 'cube-outline',
      key: 'order',
    },
    {
      title: 'Special Offers',
      subtitle: 'Receive special discounts and offers',
      icon: 'gift-outline',
      key: 'offers',
    },
    {
      title: 'Promotions',
      subtitle: 'Get notified about promotions',
      icon: 'pricetag-outline',
      key: 'promotions',
    },
    {
      title: 'App Updates',
      subtitle: 'Stay informed about new features',
      icon: 'notifications-outline',
      key: 'updates',
    },
    {
      title: 'Sound',
      subtitle: 'Play sound for notifications',
      icon: 'volume-high-outline',
      key: 'sound',
    },
    {
      title: 'Vibration',
      subtitle: 'Vibrate when notifications arrive',
      icon: 'phone-portrait-outline',
      key: 'vibration',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Ionicons name="chevron-back" size={26} color="#181725" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <View style={{ width: 26 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.banner}>
          <Ionicons
            name="notifications"
            size={55}
            color="#53B175"
          />
          <Text style={styles.bannerTitle}>
            Notification Settings
          </Text>
          <Text style={styles.bannerText}>
            Manage your notification preferences
          </Text>
        </View>

        <Text style={styles.sectionTitle}>General Notifications</Text>

        {notificationItems.map((item) => (
          <View style={styles.item} key={item.key}>
            <View style={styles.iconBox}>
              <Ionicons
                name={item.icon}
                size={23}
                color="#53B175"
              />
            </View>

            <View style={styles.itemContent}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemSubtitle}>
                {item.subtitle}
              </Text>
            </View>

            <Switch
              value={settings[item.key]}
              onValueChange={(value) =>
                setSettings({
                  ...settings,
                  [item.key]: value,
                })
              }
              trackColor={{
                false: '#E2E2E2',
                true: '#B8E5C7',
              }}
              thumbColor={
                settings[item.key] ? '#53B175' : '#FFFFFF'
              }
            />
          </View>
        ))}
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
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#181725',
  },
  banner: {
    backgroundColor: '#F2F8F3',
    borderRadius: 20,
    alignItems: 'center',
    padding: 25,
    marginTop: 20,
  },
  bannerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#181725',
    marginTop: 15,
  },
  bannerText: {
    fontSize: 13,
    color: '#7C7C7C',
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#181725',
    marginTop: 30,
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 17,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  iconBox: {
    width: 43,
    height: 43,
    borderRadius: 13,
    backgroundColor: '#F2F8F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContent: {
    flex: 1,
    marginLeft: 13,
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#181725',
  },
  itemSubtitle: {
    fontSize: 11,
    color: '#7C7C7C',
    marginTop: 5,
  },
});
