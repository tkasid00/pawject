import { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useRouter } from "next/router";
import { Card, Space, Select, Spin } from "antd";
import { parseJwt } from "../../utils/jwt";
import BoardCard from "../../components/common/BoardCard";
import BoardToggleTable from "../../components/common/BoardToggleTable";
import AdminReportHandleModal from "../../components/admin/AdminReportHandleModal";
import { fetchReportsRequest } from "../../reducers/admin/reportReducer";

const { Option } = Select;

export default function AdminReportPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [loginRole, setLoginRole] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [type, setType] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedReportId, setSelectedReportId] = useState(null);

  // 관리자 권한 확인 (초기 차단 방지)
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const payload = token ? parseJwt(token) : null;
    setLoginRole(payload?.role ?? null);
    setAuthChecked(true);
  }, []);

  const canAdmin = loginRole === "ROLE_ADMIN";

  // 권한 체크 후에만 리다이렉트
  useEffect(() => {
    if (!authChecked) return;
    if (!canAdmin) router.replace("/user/login");
  }, [authChecked, canAdmin, router]);

  const {
    reports = [],
    page = 0,
    size = 10,
    totalElements = 0,
    loading = false,
  } = useSelector((state) => state.adminReport ?? {}, shallowEqual);

  // 관리자일 때만 조회
  useEffect(() => {
    if (!authChecked || !canAdmin) return;
    dispatch(fetchReportsRequest({ type, page: 0, size }));
  }, [dispatch, canAdmin, authChecked, type, size]);

  const handleTypeChange = (value) => {
    setType(value === "ALL" ? null : value);
  };

  const handlePageChange = (p) => {
    const pageNumber = p ? p - 1 : 0;
    dispatch(fetchReportsRequest({ type, page: pageNumber, size }));
  };

  const columns = [
    { title: "ID", dataIndex: "reportId", key: "reportId" },
    { title: "타입", dataIndex: "targetType", key: "targetType" },
    { title: "대상 ID", dataIndex: "targetId", key: "targetId" },
    { title: "신고자 ID", dataIndex: "reporterUserId", key: "reporterUserId" },
    {
      title: "상태",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        if (status === "PENDING") return "대기";
        if (status === "RESOLVED") return "처리완료";
        if (status === "REJECTED") return "거절";
        return status;
      },
    },
    {
      title: "등록일",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (date) => date?.replace("T", " ").slice(0, 19),
    },
    {
      title: "내용",
      dataIndex: "details",
      key: "details",
      render: (_, record) => (
        <a onClick={() => router.push(`/admin/reports/${record.reportId}`)}>
          상세보기
        </a>
      ),
    },
  ];

  // 권한 확인 전에는 렌더 보류 (null 차단 문제 해결)
  if (!authChecked) return null;
  if (!canAdmin) return null;

  return (
    <BoardCard title="관리자 신고 관리" extra={<Space></Space>}>
      <Card bordered={false}>
        <Space style={{ marginBottom: 16 }}>
          <Select
            value={type ?? "ALL"}
            onChange={handleTypeChange}
            style={{ width: 120 }}
          >
            <Option value="ALL">전체</Option>
            <Option value="REVIEW">리뷰</Option>
            <Option value="TESTER">체험단</Option>
          </Select>
        </Space>

        <Spin spinning={loading}>
          <BoardToggleTable
            rowKey="reportId"
            columns={columns}
            dataSource={reports}
            loading={loading}
            pageNo={page}
            total={totalElements}
            pageSize={size}
            onChangePage={handlePageChange}
          />
        </Spin>
      </Card>

      <AdminReportHandleModal
        open={modalOpen}
        reportId={selectedReportId}
        onClose={() => setModalOpen(false)}
      />
    </BoardCard>
  );
}
